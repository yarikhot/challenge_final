<template>
    <div class="uinfo" id="cart">
        <div class="order">
            <h1 class="order__title">Uinfo</h1>
            <nav class="order__nav">
                <ul class="order__list">
                    <li>
                        <a href="#" class="order__link active">Cart</a>
                        <a href="#" class="order__link">Customer information</a>
                        <a href="#" class="order__link">Shipping mthod</a>
                        <a href="#" class="order__link">Payment method</a>
                    </li>
                </ul>
            </nav>
            
            
            <form class="order__form">

                <div class="order__contact">
                    <h2 class="order__ctitle">Contact information</h2>
                    <label for="telephon"></label>
                    <input type="tel" id="telephon" class="order__info one" placeholder="+380 99 999 9999" tabindex="+380 99 999 9999" required>
                    <div class="order__checked">
                        <input type="checkbox"><span>Keep me up to date on news an exclusive offers.</span>
                    </div>
                    <div class="order__checked">
                        <input type="checkbox"><span>Save this information on the next time</span>
                    </div>
                </div>

                <div class="order__shipping">
                    <h2 class="order__ctitle">Shipping addres</h2> 
                    <button type="submit" class="order__method">Continue a shipping method</button>
                </div>

                <div class="order__grid">
                    <div class="order__column">
                        <input type="text" class="order__info" placeholder="First name (optional)">
                        <input type="text" class="order__info" placeholder="Addres" required> 
                        <input type="text" class="order__info" placeholder="Last name" required>
                        <input type="text" class="order__info" placeholder="City" required>
                    </div>
                    <div class="order__column">
                        <input type="text" class="order__info" placeholder="Country" value="Ukraine" required>
                        <input type="text" class="order__info" placeholder="Postal code" required>
                        <input type="text" class="order__info" placeholder="Apartment, suite, etc. (opitional)">
                    </div>
                </div>
                
            </form>
            <router-link to="/" class="order__remove" >Return to card</router-link>
            <div class="order__login">Aready have an account? <a class="order__login-link">log in</a></div>
        </div>
        <div class="goods">

            <div class="goods__box">
                <transition name="fade-item" v-for="item in items" :key="item.id">

                    <div class="goods__item">
                        <div class="goods__group">
                            <img src="../../img/position.png" alt="pisition" class="goods__img">
                            <span class="goods__remove">{{item.amount}}</span>
                        </div>
                        
                        <p class="goods__description">{{item.description}}</p>
                        <span class="goods__price">${{item.price}}</span>
                    </div>
                    
                </transition>
                <div class="goods__subtotal"><span>Subtotal</span><span>$1000</span></div>
                <div class="goods__shipping"><span>Shipping</span><span>-</span></div>
                <div class="goods__total"><span>Total</span><span>$1000</span></div>
            </div>

        </div>
    </div>
</template>

<script>
import items from '../list.js'
import {mapGetters, mapActions, mapMutations} from 'vuex'
 
export default { 
    data() {
        return {}
    },
    computed: {
        ...mapGetters({
            items: 'getItems'
        })
    },
    methods: {
        ...mapActions(['loadItems', 'removeItems'])
    },
    created(){
        this.loadItems(items)
    }
}
</script>

