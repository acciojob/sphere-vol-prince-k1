function volume_sphere() {
    //Write your code here
	 event.preventDefault();
	let radius = document.getElementById("radius").value;
	let volume = document.getElementById("volume");

	let vol = (4/3) * Math.PI * Math.pow(radius, 3);
	volume.value = vol.toFixed(4);
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
