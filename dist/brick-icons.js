// Brick icons are data, not code: a short list of parts drawn from a fixed set of shapes and a fixed palette.
// Because an icon is only data, it can be written by hand, edited, or produced by an AI, and it is checked before it is ever drawn.
//
// An icon spec is { color, parts }:
//   color: the tool's own colour ('#rrggbb'); the palette keys 'main' and 'dark' (65% as bright) follow it.
//   parts: up to MAX_PARTS arrays [shape, x, y, z, sx, sy, sz, colour, rx?, ry?, rz?]
//     'box'  : a block of size sx, sy, sz centred on x, y, z.
//     'stud' : a round stud, written short as ['stud', x, y, z, scale, colour?] (colour defaults to 'main'; on top of a block it sits at the block's top + 0.06).
//     'tube' : a cylinder standing up, diameter sx and sz, height sy (tip it with rx to face the viewer).
//     'ring' : a flat ring in the x/y plane, radius sx, thickness sy.
//   colour : a key of PALETTE.  rx, ry, rz: optional rotation in radians.
// The icon is drawn about the origin, and is seen from the front right and above: x runs right, y up, z towards the viewer.

export const MAX_PARTS=48;
export const LIMITS={position:1.9,size:2.9,minSize:.04,rotation:3.2};
export const SHAPES=['box','stud','tube','ring'];
export const PALETTE={
  main:null,dark:null,
  face:'#f7f1df',white:'#ffffff',ink:'#3a4150',silver:'#b8c0c8',
  red:'#d9534f',coral:'#e5705a',gold:'#f2c14e',amber:'#d9822b',green:'#4fa36b',sage:'#9bb58a',teal:'#2fa39a',blue:'#3d85c6'
};

// A short stud ['stud', x, y, z, scale, colour?] is the same as the full form with all three sizes equal to the scale.
const full=part=>Array.isArray(part)&&part[0]==='stud'&&part.length<=6?['stud',part[1],part[2],part[3],part[4],part[4],part[4],part[5]??'main']:part;

export function validateIconSpec(spec){
  const problems=[];
  if(!spec||typeof spec!=='object')return ['the icon is not an object'];
  if(!/^#[0-9a-fA-F]{6}$/.test(spec.color||''))problems.push('colour must look like #rrggbb');
  if(!Array.isArray(spec.parts)||!spec.parts.length)return [...problems,'parts must be a non-empty list'];
  if(spec.parts.length>MAX_PARTS)problems.push(`too many parts: ${spec.parts.length} (at most ${MAX_PARTS})`);
  spec.parts.forEach((raw,index)=>{
    const part=full(raw),where=`part ${index}`;
    if(!Array.isArray(part)||part.length<8||part.length>11){problems.push(`${where}: expected 8 to 11 values`);return;}
    const [shape,x,y,z,sx,sy,sz,colour,...rotation]=part;
    if(!SHAPES.includes(shape))problems.push(`${where}: unknown shape ${shape}`);
    for(const value of [x,y,z])if(!Number.isFinite(value)||Math.abs(value)>LIMITS.position)problems.push(`${where}: position out of range`);
    for(const value of [sx,sy,sz])if(!Number.isFinite(value)||value<0||value>LIMITS.size)problems.push(`${where}: size out of range`);
    const used=shape==='box'||shape==='tube'?[sx,sy,sz]:shape==='ring'?[sx,sy]:[sx];
    if(used.some(value=>!(value>=LIMITS.minSize)))problems.push(`${where}: size too small`);
    if(!(colour in PALETTE))problems.push(`${where}: unknown colour ${colour}`);
    for(const value of rotation)if(!Number.isFinite(value)||Math.abs(value)>LIMITS.rotation)problems.push(`${where}: rotation out of range`);
  });
  return problems;
}

// Builds the icon as a group of meshes. Pass the renderer's shared unit cube and stud geometries; call dispose() when it has been drawn.
export function buildIcon(THREE,spec,{cube,stud}){
  const group=new THREE.Group(),materials=new Map(),geometries=[];
  const main=new THREE.Color(spec.color);
  const colourOf=key=>{
    if(!materials.has(key)){
      const color=key==='main'?main.clone():key==='dark'?main.clone().multiplyScalar(.65):new THREE.Color(PALETTE[key]);
      materials.set(key,new THREE.MeshStandardMaterial({color,roughness:key==='face'||key==='white'?.8:.5}));
    }
    return materials.get(key);
  };
  const tube=new THREE.CylinderGeometry(.5,.5,1,14);geometries.push(tube);
  for(const [shape,x,y,z,sx,sy,sz,colour,rx=0,ry=0,rz=0] of spec.parts.map(full)){
    let mesh;
    if(shape==='box'){mesh=new THREE.Mesh(cube,colourOf(colour));mesh.scale.set(sx,sy,sz);}
    else if(shape==='stud'){mesh=new THREE.Mesh(stud,colourOf(colour));mesh.scale.setScalar(sx);}
    else if(shape==='tube'){mesh=new THREE.Mesh(tube,colourOf(colour));mesh.scale.set(sx,sy,sz);}
    else{const ring=new THREE.TorusGeometry(sx,sy,4,16);geometries.push(ring);mesh=new THREE.Mesh(ring,colourOf(colour));}
    mesh.position.set(x,y,z);mesh.rotation.set(rx,ry,rz);group.add(mesh);
  }
  return {group,dispose(){for(const geometry of geometries)geometry.dispose();for(const material of materials.values())material.dispose();}};
}
