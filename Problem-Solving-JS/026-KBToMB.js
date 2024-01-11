// Function to convert bytes to kilobytes
function bytesToKB(bytes) {
    return bytes / 1024;
}

// Function to convert kilobytes to megabytes
function KBToMB(kilobytes) {
    return kilobytes / 1024;
}

// Function to convert megabytes to gigabytes
function MBToGB(megabytes) {
    return megabytes / 1024;
}

// Example usage
let fileSizeInBytes = 524288; // 512 KB
let fileSizeInKB = bytesToKB(fileSizeInBytes);
let fileSizeInMB = KBToMB(fileSizeInKB);
let fileSizeInGB = MBToGB(fileSizeInMB);

console.log(`File size: ${fileSizeInBytes} B`);
console.log(`File size: ${fileSizeInKB} KB`);
console.log(`File size: ${fileSizeInMB} MB`);
console.log(`File size: ${fileSizeInGB} GB`);
