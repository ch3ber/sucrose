export const getRoute = () => {

   const route = location.hash.slice(1)
      .toLocaleLowerCase()
      .split('/')
      .filter(character => character !== "")

   if (route[0]) return route
   if (!route[0]) return '/'
}
