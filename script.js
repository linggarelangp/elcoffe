const coffe = document.getElementById('coffe')
const nonCoffe = document.getElementById('nonCoffe')
const iceCream = document.getElementById('iceCream')
let menu = document.getElementById('menu')

const listCoffe = `
<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-center shadow-lg"
    src="https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Americano</p>
    <p class="text-gray-700 text-sm font-light">Americano adalah minuman kopi yang terdiri dari
        espresso yang dituangkan ke dalam air panas. Rasanya memiliki karakteristik yang kuat dan
        pahit.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 24,000
    </button>
</div>
</div>

<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-center shadow-lg"
    src="https://images.unsplash.com/photo-1593443320739-77f74939d0da?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Latte</p>
    <p class="text-gray-700 text-sm font-light">Latte adalah minuman kopi yang terdiri dari satu atau dua shot espresso yang dicampur dengan susu steamed dalam perbandingan yang lebih banyak susu.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 24,000
    </button>
</div>
</div>

<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-center shadow-lg"
    src="https://images.unsplash.com/photo-1599398054066-846f28917f38?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Macchiato</p>
    <p class="text-gray-700 text-sm font-light">Macchiato adalah minuman kopi yang terdiri dari espresso dengan sedikit susu atau foam susu yang ditambahkan. Ini memberikan rasa yang kuat dari espresso dan susu.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 24,000
    </button>
</div>
</div>
`

const listNonCoffe = `
<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-center shadow-lg"
    src="https://images.unsplash.com/photo-1517578239113-b03992dcdd25?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Hot Chocolate</p>
    <p class="text-gray-700 text-sm font-light">Hot chocolate adalah minuman hangat yang terbuat
        dari campuran cokelat bubuk atau pekat dengan susu panas, yang seringkali disajikan dengan
        whipped cream di atasnya. Memiliki rasa yang manis, kaya, dan menggoda cocok pada musim
        dingin atau kapan pun Anda merasa ingin sesuatu yang menyenangkan.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 16,000
    </button>
</div>
</div>

<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-center shadow-lg"
    src="https://images.unsplash.com/photo-1556679343-c7306c1976bc?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Ice Tea</p>
    <p class="text-gray-700 text-sm font-light">Ice tea adalah minuman segar yang terbuat dari teh
        yang telah didinginkan dengan es. Disajikan dengan tambahan potongan lemon atau
        daun mint untuk memberikan sentuhan kesegaran. Memiliki Rasa yang ringan, segar, dan bisa
        menjadi
        minuman yang sempurna untuk dinikmati di cuaca panas.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 16,000
    </button>
</div>
</div>

<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-center shadow-lg"
    src="https://images.unsplash.com/photo-1553787499-6f9133860278?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Milkshake</p>
    <p class="text-gray-700 text-sm font-light">Milkshake adalah minuman yang terbuat dari
        campuran es krim, susu, dan berbagai pilihan rasa seperti cokelat, vanila, stroberi. Minuman
        ini dihias dengan whipped cream di atasnya. Rasanya kaya, krimi, dan menyegarkan, menjadi
        pilihan populer untuk memuaskan rasa manis.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 16,000
    </button>
</div>
</div>
`

const listIceCream = `
<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-bottom shadow-lg"
    src="https://images.unsplash.com/photo-1614014077943-840960ce6694?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Vanilla</p>
    <p class="text-gray-700 text-sm font-light">Vanilla ice cream adalah es krim yang dibuat dengan bahan dasar susu, gula, dan vanila. Rasanya manis dengan sentuhan vanila yang lembut dan aroma yang khas. Teksturnya lembut dan krimi, dan seringkali dianggap sebagai varian es krim yang paling klasik dan populer.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 34,000
    </button>
</div>
</div>

<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-center shadow-lg"
    src="https://images.unsplash.com/photo-1580915411954-282cb1b0d780?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Chocolate</p>
    <p class="text-gray-700 text-sm font-light">Chocolate ice cream adalah es krim yang terbuat dari bahan dasar susu, gula, dan kakao. Rasanya kaya dan lezat dengan rasa cokelat yang khas, memberikan sensasi manis dan pahit secara bersamaan. Teksturnya lembut dan krimi, dan sering dianggap sebagai pilihan favorit bagi para pencinta cokelat.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 34,000
    </button>
</div>
</div>

<div class="max-w-full lg:w-[23%] rounded-xl overflow-hidden bg-white">
<img class="w-full h-[18rem] object-cover object-center shadow-lg"
    src="https://images.unsplash.com/photo-1633933358116-a27b902fad35?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
<div class="px-4 py-6">
    <p class="text-amber-800 text-2xl font-bold text-center mb-2">Strawberry</p>
    <p class="text-gray-700 text-sm font-light">Strawberry ice cream adalah es krim yang terbuat dari bahan dasar susu, gula, dan buah strawberry. Rasanya segar dan manis dengan sentuhan asam dari buah strawberry. Warna dan aroma dari buah strawberry memberikan kesan alami dan menyegarkan pada es krim dengan tekstur yang lembut.
    </p>
    <button type="button"
        class="w-full py-2 px-4 mt-10 border rounded-lg text-amber-800 border-amber-800 hover:bg-amber-800 hover:text-white italic transition-all duration-300">
        Rp 34,000
    </button>
</div>
</div>
`

coffe.classList.add('bg-amber-800', 'text-white')
menu.innerHTML = listCoffe

const changeHandler = (e) => {
    const choose = e.target.id
    console.log(choose);

    if (choose === 'coffe') {
        coffe.classList.add('bg-amber-800', 'text-white')
        nonCoffe.classList.remove('bg-amber-800', 'text-white')
        iceCream.classList.remove('bg-amber-800', 'text-white')

        menu.innerHTML = listCoffe

    } else if (choose === 'nonCoffe') {
        nonCoffe.classList.add('bg-amber-800', 'text-white')
        coffe.classList.remove('bg-amber-800', 'text-white')
        iceCream.classList.remove('bg-amber-800', 'text-white')

        menu.innerHTML = listNonCoffe

    } else if (choose === 'iceCream') {
        iceCream.classList.add('bg-amber-800', 'text-white')
        coffe.classList.remove('bg-amber-800', 'text-white')
        nonCoffe.classList.remove('bg-amber-800', 'text-white')

        menu.innerHTML = listIceCream
    }

}

coffe.addEventListener('click', changeHandler)
nonCoffe.addEventListener('click', changeHandler)
iceCream.addEventListener('click', changeHandler)
