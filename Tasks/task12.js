function hasValidPrice(product) {
	return (product && product.price && product.price >= 0)
}