function showSection(id) {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => section.classList.remove('active'));
    document.getElementById(id).classList.add('active');
    const buttons = document.querySelectorAll('nav button');
    buttons.forEach(button => button.classList.remove('active'));
    const activeButton = Array.from(buttons).find(button => button.textContent === id.charAt(0).toUpperCase() + id.slice(1));
    if (activeButton) {
        activeButton.classList.add('active');
    }
}

// Exercise 6
const z = 4.5;
const result6a = Math.pow(0.4, z) + 3.1 * Math.pow(z, 2) - 162.3 * z - 80.7;
document.getElementById('result6a').textContent = "Result: ${result6a.toFixed(5)}";
const result6b = (Math.pow(z, 3) - 23) / Math.cbrt(Math.pow(z, 2) + 17.5);
document.getElementById('result6b').textContent = "Result: ${result6b.toFixed(5)}";

// Exercise 7
const t = 3.2;
const result7a = 0.5 * Math.exp(2 * t) - 3.8 * Math.pow(t, 3);
document.getElementById('result7a').textContent = "Result: ${result7a.toFixed(5)}";
const result7b = (6 * Math.pow(t, 2) + 6 * t - 2) / (Math.pow(t, 2) - 1);
document.getElementById('result7b').textContent = "Result: ${result7b.toFixed(5)}";

// Exercise 8
const x = 6.5;
const y = 3.8;
const result8a = Math.pow(Math.pow(x, 2) + Math.pow(y, 2), 2/3) + (x * y) / (y - x);
document.getElementById('result8a').textContent = "Result: ${result8a.toFixed(5)}";
const result8b = (Math.sqrt(x + y) + 2 * Math.pow(x, 2) - x * Math.pow(y, 2)) / Math.pow(x - y, 2);
document.getElementById('result8b').textContent = "Result: ${result8b.toFixed(5)}";

// Exercise 9
const c = 4.6;
const d = 1.7;
const a = c * Math.pow(d, 2);
const b = (c + a) / (c - d);
const result9a = Math.exp(d - b) + Math.cbrt(c + a) - Math.pow(c * a, d);
document.getElementById('result9a').textContent = "Result: ${result9a.toFixed(5)}";
const result9b = (d / c) + Math.pow((c * t) / b, 2) - Math.pow(c, d) - (a / b);
document.getElementById('result9b').textContent = "Result: ${result9b.toFixed(5)}";

// Exercise 10
const pi = Math.PI;
const angle = pi / 10;

// Part (a)
const cos_sq_minus_sin_sq = Math.pow(Math.cos(angle), 2) - Math.pow(Math.sin(angle), 2);
const one_minus_two_sin_sq = 1 - 2 * Math.pow(Math.sin(angle), 2);
document.getElementById('result10a_left').textContent = "Left Side: ${cos_sq_minus_sin_sq.toFixed(5)}";
document.getElementById('result10a_right').textContent = "Right Side: ${one_minus_two_sin_sq.toFixed(5)}";
document.getElementById('result10a_verify').textContent = "Verification: ${Math.abs(cos_sq_minus_sin_sq - one_minus_two_sin_sq) < 1e-9 ? 'Identity holds' : 'Identity does not hold'}";

// Part (b)
const tan_val = Math.tan(angle);
const sin_val = Math.sin(angle);
const cos_val = Math.cos(angle);
const left_side_b = tan_val / (sin_val - 2 * tan_val);
const right_side_b = 1 / (cos_val - 2);

document.getElementById('result10b_left').textContent = "Left Side: ${left_side_b.toFixed(5)}";
document.getElementById('result10b_right').textContent = "Right Side: ${right_side_b.toFixed(5)}";
document.getElementById('result10b_verify').textContent = "Verification: ${Math.abs(left_side_b - right_side_b) < 1e-9 ? 'Identity holds' : 'Identity does not hold'}";

// Show the first section by default
showSection('exercise6');
