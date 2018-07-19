const argv = require('./config/yargs').argv
const porHacer = require('./src/por-hacer')
const colors = require('colors');

let comando = argv._[0]

switch( comando ){
	case 'crear':
		let tarea = porHacer.crear( argv.descripcion )
		console.log(tarea)
		break

	case 'listar':
		let listado = porHacer.listar()

		for(let tarea of listado){
			console.log('\n=========Por Hacer========='.green)
			console.log('Tarea:', tarea.descripcion)
			console.log('Estado:', tarea.completado)
			console.log('==========================='.green)
		}
		break

	case 'actualizar':
		let actualizar = porHacer.actualizar(argv.descripcion, argv.completado)
		console.log(actualizar)
		break

	case 'borrar':
		let borrar = porHacer.borrar(argv.descripcion)
		console.log(borrar)
		break

	default:
		console.log('Comando no reconocido'.red)
}