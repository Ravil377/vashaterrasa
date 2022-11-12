import enquire from 'enquire.js'
import { overlayAdd, overlayRemove } from '../overlay/overlay'

// const filterBtn = document.querySelector('.filter__title-js');
const filterMobilBtn = document.querySelector('.filter-btn-js');
const filter = document.querySelector('.filter-js');
// const filterBackBtn = document.querySelector('.filter__back-btn-js');

// filterBtn && filterBtn.addEventListener('click', () => {
//     filterBtn.classList.toggle('_active');
// })

filterMobilBtn && filterMobilBtn.addEventListener('click', hideFilter);
const clickHandler = event => {
	event.preventDefault()

	if (filter.classList.contains('_open')) {
		hideFilter()
	} else {
		showFilter()
	}
}
function showFilter() {
    filter.classList.add('_open');
    document.querySelector('.category').classList.add('is-active');
    document.querySelector('.category').classList.add('is-filter');
    overlayAdd();
}
function hideFilter() {
    filter.classList.remove('_open');
    document.querySelector('.category').classList.remove('is-active');
    document.querySelector('.category').classList.remove('is-filter');
    overlayRemove();
}

enquire.register('screen and (max-width: 992px)', {
	// deferSetup: true,
	match() {
		filterMobilBtn.addEventListener('click', clickHandler)
		document.addEventListener('click', event => {
			if (event.target.dataset.backdrop === 'overlay') {
				hideFilter()
			}
		})
		// $closeBtn.addEventListener('click', hideMenu)
	},
	unmatch() {
		filterMobilBtn.removeEventListener('click', clickHandler)
		// $closeBtn.removeEventListener('click', hideMenu)
	}
})

// filterBackBtn && filterBackBtn.addEventListener('click', () => { 
//     filter.classList.remove('_active'); 
//     document.querySelector('.category').classList.remove('is-active');
// })