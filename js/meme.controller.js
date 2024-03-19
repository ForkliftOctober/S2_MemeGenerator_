'use strict'

let gElCanvas
let gCtx

function renderMeme() {
	gElCanvas = document.querySelector('.main-canvas')
	gCtx = gElCanvas.getContext('2d')
	const elImg = document.querySelector(`.img`)

	drawImg()
	resizeCanvas()
	drawText()
	coverCanvasWithImg(elImg)
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
function drawText(text = 'Hello World!', x, y) {
	gCtx.strokeStyle = 'black'
	gCtx.fillStyle = 'white'
	gCtx.lineWidth = 1

	gCtx.font = '45px Impact'
	gCtx.textAlign = 'center'
	gCtx.textBaseline = 'middle'

	gCtx.fillText(text, gElCanvas.width / 2, gElCanvas.height - 20)
	gCtx.strokeText(text, gElCanvas.width / 2, gElCanvas.height - 20)
}

// BUTTONS
function onDownload(elLink) {
	elLink.download = 'my-img'

	const dataUrl = gElCanvas.toDataURL()
	elLink.href = dataUrl
}
