import db from '../../db.json'
import CommandCard from '../templates/CommandCard';

export function resolveCommands(command) {

   const DEFAULT_CONTENT = '<p class="commands-descubre await-transitionBar">Descubre!</p>'

   switch (command) {
      case 'confesiones':
         return db.commands.confesiones.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'diversion':
         return db.commands.diversion.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'economia':
         return db.commands.economia.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'informacion':
         return db.commands.informacion.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'juegos':
         return db.commands.juegos.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'moderacion':
         return db.commands.moderacion.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'musica':
         return db.commands.musica.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'otros':
         return db.commands.otros.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case 'roleplay':
         return db.commands.roleplay.map(commandInfo => CommandCard(commandInfo.id, commandInfo.name, commandInfo.description)).join('')
      case null:
         return DEFAULT_CONTENT;
   }
}
