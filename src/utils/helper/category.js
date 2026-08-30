export function getCategory (category, id) {
    console.log(category)
    const {title} = category.find((title) => title.id === id)
    return title
} 