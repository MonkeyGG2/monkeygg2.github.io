precision lowp float;

varying vec2 vTextureCoord;

uniform sampler2D uSampler;

void main(void) {
    vec4 f = texture2D(uSampler, vTextureCoord);
    // Convert to grayscale using NTSC conversion weights
    float luma = dot(f.rgb, vec3(0.299, 0.587, 0.114));
    gl_FragColor = vec4(luma, luma, luma, f.a);
}
