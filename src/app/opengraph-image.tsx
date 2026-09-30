import { ImageResponse } from 'next/og';

export const alt = 'ApexGen — Premium Web Design & Development Studio';
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = 'image/png';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'space-between',
          backgroundColor: '#070709',
          padding: '80px',
          position: 'relative',
        }}
      >
        {/* Subtle decorative grid lines */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: 'flex',
            backgroundImage:
              'radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
          }}
        />

        {/* Brand header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: '44px',
              fontWeight: 300,
              letterSpacing: '-0.04em',
              color: '#ffffff',
            }}
          >
            <span>APEX</span>
            <span style={{ fontWeight: 700, color: '#9ca3af' }}>GEN</span>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '6px 16px',
              borderRadius: '999px',
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: '14px',
              color: '#9ca3af',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
            }}
          >
            DIGITAL STUDIO
          </div>
        </div>

        {/* Center Tagline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              fontSize: '64px',
              fontWeight: 300,
              color: '#ffffff',
              lineHeight: 1.05,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
            }}
          >
            <span>BUILD DIGITAL EXPERIENCES</span>
            <span>THAT PEOPLE REMEMBER.</span>
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: '22px',
              color: '#9ca3af',
              maxWidth: '850px',
              lineHeight: 1.4,
            }}
          >
            High-performance web design, AI-assisted development, and conversion-focused systems for ambitious brands.
          </div>
        </div>

        {/* Footer info */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '100%',
            borderTop: '1px solid rgba(255,255,255,0.15)',
            paddingTop: '32px',
            fontSize: '18px',
            color: '#6b7280',
            letterSpacing: '0.1em',
          }}
        >
          <div style={{ display: 'flex' }}>APEXGEN.WEBSITE</div>
          <div style={{ display: 'flex' }}>WEB DESIGN &bull; NEXT.JS &bull; BOOKING ENGINES &bull; SEO</div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
