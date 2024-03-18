'use strict'

let gElCanvas
let gCtx

function renderMeme() {
	gElCanvas = document.querySelector('.main-canvas')
	gCtx = gElCanvas.getContext('2d')
	const elImg = document.querySelector(`.img`)

	drawImg()
	resizeCanvas()
	renderText()
	// coverCanvasWithImg(elImg)
	window.addEventListener('resize', () => resizeCanvas())
}

// CANVAS IMAGE
function coverCanvasWithImg(elImg) {
	gElCanvas.height = (elImg.naturalHeight / elImg.naturalWidth) * gElCanvas.width
	gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
}

function resizeCanvas() {
	const elContainer = document.querySelector('.canvas-container')
	gElCanvas.width = elContainer.clientWidth
}

function drawImg() {
	const img = new Image()
	img.src = 'img/memes/15.jpg'

	img.onload = () => gCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
}

// CANVAS TEXT
function renderText() {
	gCtx.font = '30px Impact'
	gCtx.fillStyle = 'white'
	gCtx.strokeStyle = 'black'
	gCtx.lineWidth = 10
	gCtx.textAlign = 'center'
	gCtx.fillText('Hello World!', gElCanvas.width / 2, gElCanvas.height - 20)
}

// BUTTONS
function onDownload(elLink) {
	elLink.download = 'my-img'

	const dataUrl = gElCanvas.toDataURL()
	elLink.href = dataUrl
}

// TODO: fjdkslfjsl
