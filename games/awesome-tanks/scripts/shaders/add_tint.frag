// Specific tint variant, similar to the Flash tinting that adds to the color and not multiplies
// Note: A negative of a color must be supplied for this shader to work properly, ie. set sprite.tint to 0 to turn
// whole sprite to white.
precision lowp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void) {
    vec4 f = texture2D(uSampler, vTextureCoord);
    float a = clamp(vColor.a, 0.00001, 1.0);
    gl_FragColor.rgb = f.rgb * vColor.a + clamp(1.0 - vColor.rgb/a, 0.0, 1.0) * vColor.a * f.a;
    gl_FragColor.a = f.a * vColor.a;
}
