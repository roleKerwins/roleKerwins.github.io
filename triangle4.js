"use strict";

var gl;
var points;

window.onload = function init(){
    var canvas = document.getElementById( "triangle-canvas" );
    gl = WebGLUtils.setupWebGL( canvas );
    if( !gl ){
        alert( "WebGL isn't available" );
    }

    // Three Vertices
    var vertices = [
        -3.0, -3.0,
        0.0,  -3.0,
        -0.0,-0.0,
        /*0.0, -1.0,
         1.0, -1.0,
         1.0,  1.0,
         0.0, -1.0,
         1.0,  1.0,
         0.0,  1.0*/
        /*-0.5, -0.5,
        0.0, 0.5,
        0.5, -0.5*/
    ];
    var vertices2 = [
        0.0, 10,0,
        -20.0,  3.0,
        0.0, -5.0,
         1.0, -1.0,
      /*    1.0,  1.0,
        /*  0.0, -1.0,
          1.0,  1.0,
          0.0,  1.0*/
        /*-0.5, -0.5,
        0.0, 0.5,
        0.5, -0.5*/
    ];
    // Configure WebGL
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 1.0, 1.0, 1.0, 1.0 );

    // Load shaders and initialize attribute buffers
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );

    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices ), gl.STATIC_DRAW );

    // Associate external shader variables with data buffer
    var vPosition1 = gl.getAttribLocation( program, "vPosition1" );
    gl.vertexAttribPointer( vPosition1, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition1 )
    render();

    //正方形
    var program2 = initShaders( gl, "vertex-shader1", "fragment-shader1" );
    gl.useProgram( program2 );

    var bufferId2 = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId2 );
    gl.bufferData( gl.ARRAY_BUFFER, new Float32Array( vertices2 ), gl.STATIC_DRAW );

    var vPosition= gl.getAttribLocation( program2, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition )
    render2();


}

function render(){
    gl.clear( gl.COLOR_BUFFER_BIT );
    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
    gl.drawArrays( gl.TRIANGLES, 0, 3 );
    //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}

function render2(){
    // gl.clear( gl.COLOR_BUFFER_BIT );
    //gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 );
    gl.drawArrays( gl.TRIANGLES, 0, 4 );
    //gl.drawArrays( gl.TRIANGLE_FANS, 3, 6 );
}