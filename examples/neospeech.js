/*
 * examples/neospeech.js
 */

require('colors');

var fs = require('fs');

var neospeech = new (require('..'))({
    host: '15.125.118.164',
    port: 4000
});
//

var test = fs.readFileSync('loadTest.txt', "utf8");
console.log(test.length);

//neospeech.requestBufferEx({
//  text: test,                 // default: ''
//  speakerId: 'JULIE',      // default: 'JULIE'
//  voiceFormat: 'WAVE',  // default: 'DEFAULT'
//  textFormat: 'NORMAL',    // default: 'NORMAL'
//  volume: 100,             // default: 100, valid: 0-500
//  speed: 100,               // default: 100, valid: 50-400
//  pitch: 100,               // default: 100, valid: 50-200
//  dictNum: 1,          // default: 1
//  all: true                    // default: true, required: voiceFormat='PCM','MULAW','ALAW'
//}, function (err, result) {
//    console.log('=== requestBufferEx (test-requestBufferEx.ogg) ==='.cyan);
//     if (err) { return console.error(err); }
//
//    var fd =  fs.openSync('test-requestBufferEx.wav', 'w');
//   //fout.once('open', function(fd) {
//
//     var buff = new Buffer(result.buffer);
//   //tried also with 'base64'
//
//    fs.write(fd, buff, 0, buff.length, 0, function(err,written){
//    console.log(err);
//    });
//
//  console.log(result);
//});

//neospeech.julie(test, 'test-julie', function (err, result) {
//  console.log('=== julie (test-julie.wav) ==='.cyan);
//  if (err) { return console.error(err); }
//  console.log(JSON.stringify(result, null, 2));
//});

//neospeech.requestBufferEx({
//  text: 'I have a very annoying voice.',
//  voiceFormat: 'JULIE',
//  volume: 400,  // 0-500
//  speed: 70,    // 50-400
//  pitch: 200,   // 50-200
//  all: true
//}, function (err, result) {
//  console.log('=== requestBufferEx (test-requestBufferEx.wav) ==='.cyan);
//  if (err) { return console.error(err); }
//
//  var fout = fs.createWriteStream('F:\\home\\test-requestBufferEx.wav', {flags: 'w'});
//  fout.on('error', function (err) {
//    console.error(err);
//  });
//  fout.write(result.buffer);
//  fout.end();
//  fout.destroy();
//
//  console.log(result);
//});

//neospeech.bridget('Hello, my name is Bridget.', 'test-bridget', function (err, result) {
//  console.log('=== bridget (test-bridget.wav) ==='.cyan);
//  if (err) { return console.error(err); }
//  console.log(JSON.stringify(result, null, 2));
//});
//
//neospeech.requestBuffer({
//  text: 'The audio data written to buffer memory was saved to a file on disk.',
//  voiceFormat: 'PCM',
//  all: true
//}, function (err, result) {
//  console.log('=== requestBuffer (test-requestBuffer.pcm) ==='.cyan);
//  if (err) { return console.error(err); }
//
//  var fout = fs.createWriteStream('hpartifacts.pcm', {flags: 'w'});
//  fout.on('error', function (err) {
//    console.error(err);
//  });
//  fout.write(result.buffer);
//  //fout.end();
//  //fout.destroy();
//
//  console.log(result.buffer.length);
//
//  neospeech.util.m4a('hpartifacts.pcm');
//  neospeech.util.mp3('hpartifacts.pcm');
//  neospeech.util.ogg('hpartifacts.pcm');
//  neospeech.util.wav('hpartifacts.pcm');
//});

//var crypto = require('crypto');
//var fs = require('fs');
//var wstream = fs.createWriteStream('myBinaryFile.pcm');
//// creates random Buffer of 100 bytes
//var buffer = crypto.randomBytes(100);
//wstream.write(buffer);
//// create another Buffer of 100 bytes and write
//wstream.write(crypto.randomBytes(100));
//wstream.end();
//
//neospeech.requestBufferSSMLEx({
//  text: 'SSML is an advanced way to create audio files.'
//}, function (err, result) {
//  console.log('=== requestBufferSSMLEx (test-requestBufferSSMLEx.pcm) ==='.cyan);
//  if (err) { return console.error(err); }
//
//  var fout = fs.createWriteStream('/usr/vt/result/test-requestBufferSSMLEx.pcm', {flags: 'w'});
//  fout.on('error', function (err) {
//    console.error(err);
//  });
//  fout.write(result.buffer);
//  fout.end();
//  fout.destroy();
//
//  console.log(result);
//});
//
//neospeech.requestFile({
//  text: 'Bridget is U.K. English Female voice.',
//  outPath: 'test-requestFile',
//  speakerId: 'BRIDGET'
//}, function (err, result) {
//  console.log('=== requestFile (test-requestFile.wav) ==='.cyan);
//  if (err) { return console.error(err); }
//  console.log(JSON.stringify(result, null, 2));
//});
//
neospeech.requestFileEx({
  text: test,
  outPath: 'test-requestFileEx',
  textFormat: 'NORMAL',
  volume: 100,  // 0-500
  speed: 100,   // 50-400
  pitch: 100     // 50-200
}, function (err, result) {
  console.log('=== requestFileEx (TEXT, test-requestFileEx.wav) ==='.cyan);
  if (err) { return console.error(err); }
  console.log(JSON.stringify(result, null, 2));
});

//neospeech.requestFileSSML({
//  text: '<mark name="mark1"/> Hello, this <mark name="mark2"/> is a test <mark name="mark3"/> with the marks. <mark name="mark4"/>',
//  outPath: 'test-requestFileSSML'
//}, function (err, result) {
//  console.log('=== requestFileSSML (test-requestFileSSML.wav) ==='.cyan);
//  if (err) { return console.error(err); }
//  console.log(JSON.stringify(result, null, 2));
//});
//
//neospeech.requestStatus(function (err, result) {
//  console.log('=== requestStatus ==='.cyan);
//  if (err) { return console.error(err); }
//  console.log(JSON.stringify(result, null, 2));
//});
