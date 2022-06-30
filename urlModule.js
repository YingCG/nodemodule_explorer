// const url = "https://trademe.co.nz/a/marketplace/books/search?search_string=books"
// const urlVar = new URL(url)

const urlData = new URL('https://www.trademe.co.nz/a/marketplace/home-living/lounge-dining-hall/tables/coffee-tables/search?search_string=coffee%20table&user_region=2')

console.log(urlData)

const urlVar = new URL('https://www.trademe.co.nz/a/marketplace/computers/laptops/search?search_string=laptop&condition=new&shipping_method=pickup&price_min=30&price_max=20')
console.log(urlVar.href)
console.log(urlVar.origin)
console.log(urlVar.hostname)
console.log(urlVar.pathname)
console.log(urlVar.search)
console.log(urlVar.searchParams)

urlVar.searchParams.forEach(param => {
    console.log(param)
});