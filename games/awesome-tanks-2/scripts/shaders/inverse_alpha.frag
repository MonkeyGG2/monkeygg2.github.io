precision lowp float;

varying vec2 vTextureCoord;
varying vec4 vColor;

uniform sampler2D uSampler;

void main(void) {
    vec4 f = texture2D(uSampler, vTextureCoord);
    gl_FragColor.rgb = f.rgb;
    gl_FragColor.a = (1.0 - f.a) * vColor.a;
}
