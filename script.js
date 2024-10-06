// Upper Body Exercise data
const chestExercises = [
    { name: "Incline Bench Press", image: "https://static.strengthlevel.com/images/illustrations/incline-dumbbell-bench-press-1000x1000.jpg" },
    { name: "Decline Bench Press", image: "https://static.strengthlevel.com/images/illustrations/decline-dumbbell-bench-press-1000x1000.jpg" },
    { name: "Push-Ups", image: "https://th.bing.com/th/id/OIP.SglZbUTvRRvXqd11JiD3zgHaHa?rs=1&pid=ImgDetMainimages/pushups.jpg" }
];

const absExercises = [
    { name: "Plank", image: "https://th.bing.com/th/id/OIP.HvodwlnzxIcT05yClPewTAHaHa?rs=1&pid=ImgDetMainimages/plank.jpg" },
    { name: "Crunches", image: "https://workoutguru.fit/wp-content/uploads/2023/10/lying-obliques-crunch-version-2-male-video-exercise-guide-tips-1024x576.jpg" }
];

const backExercises = [
    { name: "Pull-Up", image: "https://th.bing.com/th/id/OIP.gu_FxTi5KF4Sx7zPyDKvqgHaGj?w=490&h=434&rs=1&pid=ImgDetMainllup.jpg" }
];

const shoulderExercises = [
    { name: "Seated Dumbbell Press", image: "https://th.bing.com/th/id/OIP.QbRUCCFdpBEUaAx2zzj3lwHaD9?rs=1&pid=ImgDetMain" },
    { name: "Overhead Dumbbell Press", image: "https://th.bing.com/th/id/OIP.xCQ3ztGpgzeTS0oQsXO1aQHaEK?rs=1&pid=ImgDetMain" }
];

// Lower Body Exercise data
const legsExercises = [
    { name: "Squats", image: "https://static.strengthlevel.com/images/exercises/squat/squat-400.avif" },
    { name: "Lunges", image: "https://static.strengthlevel.com/images/exercises/dumbbell-lunge/dumbbell-lunge-400.avif" }
];

const glutesExercises = [
    { name: "Hip Thrusts", image: "https://th.bing.com/th/id/OIP.aeEBTnH-DDOqa92l7BxHxgHaHa?rs=1&pid=ImgDetMain" },
    { name: "Glute Bridges", image: "https://www.hevyapp.com/wp-content/uploads/06681101-Rear-Decline-Bridge_Waist_small.jpg" }
];

const quadsExercises = [
    { name: "Leg Press", image: "https://static.strengthlevel.com/images/exercises/sled-leg-press/sled-leg-press-400.avif" }
];

const hamstringsExercises = [
    { name: "Deadlifts", image: "https://static.strengthlevel.com/images/exercises/deadlift/deadlift-400.avif" }
];

// Function to display exercises based on the selected category
function displayExercises(exercises) {
    const exerciseList = document.getElementById('exerciseList');
    exerciseList.innerHTML = ""; // Clear previous exercises
    exercises.forEach(exercise => {
        const div = document.createElement('div');
        div.classList.add('exercise'); // Add class for styling
        // Creating image and caption
        div.innerHTML = `<h3>${exercise.name}</h3><img src="${exercise.image}" alt="${exercise.name} Image">`;
        exerciseList.appendChild(div);
    });
}

// Event listeners for upper body buttons
document.getElementById('chestBtn')?.addEventListener('click', () => displayExercises(chestExercises));
document.getElementById('absBtn')?.addEventListener('click', () => displayExercises(absExercises));
document.getElementById('backBtn')?.addEventListener('click', () => displayExercises(backExercises));
document.getElementById('shoulderBtn')?.addEventListener('click', () => displayExercises(shoulderExercises));

// Event listeners for lower body buttons
document.getElementById('legsBtn')?.addEventListener('click', () => displayExercises(legsExercises));
document.getElementById('glutesBtn')?.addEventListener('click', () => displayExercises(glutesExercises));
document.getElementById('quadsBtn')?.addEventListener('click', () => displayExercises(quadsExercises));
document.getElementById('hamstringsBtn')?.addEventListener('click', () => displayExercises(hamstringsExercises));
