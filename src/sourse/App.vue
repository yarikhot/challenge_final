<template>

	<div id="app" class="app">

		<header class="header">

			<nav class="header__nav">
				<ul class="header__list">
					<li class="header__item"><a href="#" class="header__link">Home</a></li>
					<li class="header__item"><a href="#" class="header__link">Your Shopping Carts</a></li>
				</ul>
			</nav>
			
		</header>

		<section class="cart">

			<h1 class="cart__title">You Shopping Cart</h1>

			<div class="cart__box">

				<transition name="fade" v-for="(item, index) in items " :key="item.id" :index="index">
					<div class="cart__item">
						<div class="cart__img"><img src="img/position.png" alt="item.title"></div>
						<div class="cart__description">
							<div class="cart__info">

								<div class="cart__info-item">
									<span class="cart__text">{{ item.title }}</span>
								</div>
								<div class="cart__info-item">
									<span class="cart__bold">Product type:</span><span class="cart__text">{{item.type}}</span>
								</div>
								<div class="cart__info-item">
									<span class="cart__bold">Wendor:</span><span class="cart__text">{{item.vendor}}</span>
								</div>
								<div class="cart__info-item">
									<span class="cart__bold">Weight:</span><span class="cart__text">{{item.weight}}kg</span>
								</div>
								
								<div class="cart__counter">
									<span class="cart__price price">${{item.price}}</span>
									<button class="cart__countbtn" @click.prevent="item.amount--">-</button>
									<span class="cart__account">{{item.amount}}</span>
									<button class="cart__countbtn" @click.prevent="item.amount++">+</button>
									<span class="cart__price price">${{item.price*item.amount}}</span>
								</div>

							</div>

							<div class="cart__btngroup">
								<button class="cart__btn" @click.prevent="removeItems(index)">Remove</button>
								<button class="cart__btn">Update</button>
							</div>
						</div>
					</div>
				</transition>
				
			</div>
				
		</section>
		<section class="total">
			<div class="total__description">
				<div class="total__item"><span>Total weight</span><span class="total__result">26.01Ib</span></div>
				<div class="total__item"><span>Total price</span><span class="total__result price">$1000</span></div>
			</div>	
			
			<div class="total__group">
				<router-link to="/cart" class="total__btn" >proceed to checkout</router-link>
				<button class="total__btn">continue shopping</button>
			</div>
		</section>
		<section class="note">
			<label for="note" class="note__label">Add a note to you order</label>
			<textarea name="note" id="note" cols="30" rows="10" class="note__area"></textarea>
		</section>
	
	</div>

</template>

<script>
import items from './list.js'
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
};
</script>

<style lang="scss" src="../scss/index.scss">
@import "../scss/index.scss";
</style>
