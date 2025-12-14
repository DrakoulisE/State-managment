import { create } from 'zustand'

const useStore = create((set) => ({
    //cart visibility state
    cartVisible: false,
    toggleCart: () => set((State) => ({
        cartVisible: !State.cartVisible
    })),

    //cart state
    cart: [],
    addToCart: (product) => set((state) => {

        const existingItem = state.cart.find((item) => item.title === product.title);

        if (existingItem) {
            return {
                cart: state.cart.map((item) =>
                    item.title === product.title
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                ),
            };
        } else {
            return {
                cart: [...state.cart, { ...product, quantity: 1 }],
            };
        }
    }),
    decreaseQuantity: (productTitle) => set((state) => {
        const existingItem = state.cart.find((item) => item.title === productTitle);
        
        if (!existingItem) return { cart: state.cart };

        if (existingItem.quantity > 1) {
            return {
                cart: state.cart.map((item) =>
                    item.title === productTitle
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                ),
            };
        } else {
            return {
                cart: state.cart.filter((item) => item.title !== productTitle),
            };
        }
    }),
    removeFromCart: (productTitle) => set((state) => ({
        cart: state.cart.filter((item) => item.title !== productTitle)
    })),
}));

export default useStore;