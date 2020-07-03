export const full = `mov r1, r2\nmov $42, r2\nmov r1, $4200\nmov &4200, r1\nmov $42, #6f2a\nmov *4200, r1\nmov &4200, r1, r2\n\nmodule Game\n\nimport interruptVector $0100 "interupt-vector.mod" {}\nimport physics $0100 "game-physics.mod" {\n  gravity: $02,\n  objectDataTableAddress: [objectData.table],\n}\n\nmodule interruptVector\n+data16 table = {\n  $1000,\n  $2000,\n  $3100,\n}\n\nmodule AI parameters (\n  difficulty\n)\n\nsome_loacl_routine:\n  mov $31, r1\n  add r1, [difficulty]\n  mov [some_exported_routine], ip\n\nplace_at [!loc + routine_size(some_loacl_routine) + $100]\n+some_exported_routine:\n  add r1, r2\n\n@structure GameObject {\n  tileOffset: $02\n}\n\n+data_structure table = GameObject {}\ndata_structure row2 GameObject {}\n\nmodule SomeModule parameters (\n  ball\n)\n\nmov &[(GameObject)ball.x], r1\n\nstructure_size(GameObject)\n\nconstant SOME_THING $02`;
export default [
  "start:",
  "  mov $0A, &0050",
  "loop:",
  "  mov &0050, acc",
  "  dec acc",
  "  mov acc, &0050",
  "  inc r2",
  "  inc r2",
  "  inc r2",
  "  jne $00, &[!loop]",
  "end:",
  "  hlt",
].join("\n");
