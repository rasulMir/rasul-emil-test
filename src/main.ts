import './scss/normalize.scss'
import './icomoon/icomoon.css'
import './scss/style.scss'

document.addEventListener('DOMContentLoaded', function () {
	const menuIcon = document.querySelector('#menuIcon') as HTMLAnchorElement
	const headNavMenu = document.querySelector('#headNavMenu') as HTMLElement
	const reviewsTitles = document.querySelectorAll<HTMLElement>('.reviews-title__txt')
	
	if (menuIcon) {
		menuIcon.addEventListener('click', clickMenuOpenHandler)
	}

	if (reviewsTitles) {
		reviewsTitles.forEach(i => {
			i.addEventListener('click', (e) => {
				const item = e.target as HTMLDivElement
				reviewsTitles.forEach(i => {
					i.classList.remove('reviews-title__txt_active')
				})

				if (item.classList.contains('reviews-title__txt_active')) {
					item.classList.remove('reviews-title__txt_active')
				}
				else {
				
					item.classList.add('reviews-title__txt_active')
				}
			})
		})
	}
	
	function clickMenuOpenHandler()  {
		if (menuIcon.classList.contains('head-nav__menu-icon_active')) {
			menuIcon.classList.remove('head-nav__menu-icon_active')
			headNavMenu.classList.remove('head-nav__menu_active')
			document.body.style.overflow = 'auto'
		}
		else {
			menuIcon.classList.add('head-nav__menu-icon_active')
			headNavMenu.classList.add('head-nav__menu_active')
			
			document.body.style.overflow = 'hidden'
		}
	}
	
	
	const heightItems = document.querySelectorAll<HTMLElement>('.product-info__capacity-item')
	
	heightItems.forEach(i => {
		i.addEventListener('click', heightItemsChoose)
	})

	function heightItemsChoose(e: MouseEvent) {
		const item = e.target as HTMLDivElement

		heightItems.forEach(i => {
			i.classList.remove('product-info__capacity-item_active')
		})

		if (item.classList.contains('product-info__capacity-item_active')) {
			item.classList.remove('product-info__capacity-item_active')
		}
		else {
			item.classList.add('product-info__capacity-item_active')
		}
	}

	
	const minusEl = document.querySelector('.product-info__order-minus')
	const amountEl = document.querySelector('.product-info__amount')
	const plusEl = document.querySelector('.product-info__order-plus')

	if (!!amountEl && !!minusEl && !!plusEl) {
		let amount = 1
		amountEl.textContent = `${amount}`

		minusEl.addEventListener('click', minusHandler)
		plusEl.addEventListener('click', plusHandler)

		function minusHandler() {
			if (!!amountEl && !!minusEl && !!plusEl) {
				if (amount <= 1) {
					amount = 1
				}
				else {
					amount--
				}
				amountEl.textContent = `${amount}`
			}
		}

		function plusHandler() {
			if (!!amountEl && !!minusEl && !!plusEl) {
				amount++
				amountEl.textContent = `${amount}`
			}
		}
	}

	const sortBtn = document.querySelector<HTMLElement>('#sortBtn')
	const sortList = document.querySelector<HTMLElement>('#sortList')
	const sortItems = document.querySelectorAll<HTMLElement>('#sortItem')

	if (sortBtn && sortList && sortItems) {
		sortBtn.addEventListener('click', () => {
			if (sortList.classList.contains('reviews-sort__list_active')) {
				sortList.classList.remove('reviews-sort__list_active')
			}
			else {
				sortList.classList.add('reviews-sort__list_active')
			}
		})

		sortItems.forEach(i => {
			i.addEventListener('click', (e: MouseEvent) => {
				sortBtn.textContent = e.target?.textContent
				sortList.classList.remove('reviews-sort__list_active')
			})
		})
		
	}
	
})

