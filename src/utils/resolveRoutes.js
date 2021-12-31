export const resolveRoutes = (route) => {
   if (route[0] === '/') return '/'

   if (route.length === 1) return `/${route[0]}`

   if (route.length === 2) {
      return `/${route[0]}/${route[1]}`
   }
}
