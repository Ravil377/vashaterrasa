import inputmask from 'inputmask'
const $phoneMask = document.querySelector('.phone-mask--js')
const $phoneMask1 = document.querySelector('.phone-mask1--js')
const $phoneMask2 = document.querySelector('.phone-mask2--js')

if ($phoneMask) {
	inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	}).mask($phoneMask)
}
if ($phoneMask1) {
	inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	}).mask($phoneMask1)
}
if ($phoneMask2) {
	inputmask({
		mask: '+7 (999) 999-99-99',
		showMaskOnHover: false
	}).mask($phoneMask2)
}