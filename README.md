# LB Mock Store (Vue version)

Simple project that I used to test and learn about state management in Vue with Vuex, as well as Vue in general

Pages:
- Catalog
- Cart
- Login
- Profile

The state of the cart is shared across both pages, as well as in the navbar, this state is saved in the localStorage, so if you reload the page, the cart will be restored.

Other features:
- Pagination
- Searching (with debounce in the input)
- Filtering
- Authentication (Login/Logout/Change Password)

Demo available in [levyks.com/lb-store-vue](https://www.levyks.com/lb-store-vue)
(Example user -> email: johndoe@levyks.com | password: 12345)

API repo (Django + DRF): [Levyks/mock-store-api](https://github.com/Levyks/mock-store-api)

Layout heavily inspired by this nice ["State Management in Svelte Applications" post](https://auth0.com/blog/state-management-in-svelte-applications/) by [Fikayo Adepoju](https://github.com/coderonfleek), some of the items/images in the demo catalog were also taken from that repo

The remaining items/images were taken from [Samermadieh/e-commerce-js](https://github.com/Samermadieh/e-commerce-js)

![Screenshot 1](https://i.imgur.com/TSTW8Ry.png)
![Screenshot 2](https://i.imgur.com/AcSXxAr.png)
