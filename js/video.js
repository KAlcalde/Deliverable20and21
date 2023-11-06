var video;

//Initialize 
window.addEventListener("load", function() {
	// console.log("Good job opening the window")
	video = document.querySelector("#player1");
	video.autoplay = false;
	video.loop = false;
	video.pause();
	video.volume = document.querySelector("#slider").value / 100;

});

//Play + TODO: Volume
document.querySelector("#play").addEventListener("click", function() {
	// console.log("Play Video");
	video.play();
	document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
});

//Pause
document.querySelector("#pause").addEventListener("click", function() {
	// console.log("Pause Video");
	video.pause();
});

//Slow Down
document.querySelector("#slower").addEventListener("click", function() {
	// console.log("Slowing Video")
	video.playbackRate = video.playbackRate - 0.1;
	console.log(video.playbackRate)
})

//Speed Up
document.querySelector("#faster").addEventListener("click", function() {
	// console.log("Speeding Up Video")
	video.playbackRate = video.playbackRate + 0.1;
	console.log(video.playbackRate)
})

//Skip Ahead
document.querySelector("#skip").addEventListener("click", function() {
	// console.log("Skipping Video")
	if (video.currentTime + 10 < video.duration){
		video.currentTime += 10;
	}
	else{
		//adding 10s will be more than video => back to start 
		video.currentTime = 0;
		// DO WE WANT TO PAUSE HERE?
	}
	console.log(video.currentTime);
})

//Mute
document.querySelector("#mute").addEventListener("click", function() {
	// console.log("Mute Video")
	curr_muted = video.muted;
	if(curr_muted){
		video.muted = false;
		this.innerHTML = "Mute";
		document.querySelector("#volume").textContent = Math.round(video.volume * 100) + "%";
		document.querySelector("#slider").value = video.volume * 100;
	}
	else{
		video.muted = true;
		this.innerHTML = "Unmute";
		document.querySelector("#volume").textContent = "0%";
		document.querySelector("#slider").value = 0;
	}
})

//Volume Slider
document.querySelector("#slider").addEventListener("input", function() {
	// console.log("Slider Video")
	video.volume = this.value / 100.0;
	document.querySelector("#volume").textContent = this.value + "%";
})

// Styled
document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Old School Video")
	video.classList.add("oldSchool");
})

// Original
document.querySelector("#orig").addEventListener("click", function() {
	console.log("Original Video")
	video.classList.remove("oldSchool");
})

