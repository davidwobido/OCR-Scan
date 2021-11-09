import React from 'react';

function Styleguide() {
  return (
    <div style={{ margin: '0px', display: 'grid', gap: '5rem' }}>
      <div>
        <h3>Colors</h3>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-primary)',
              }}
            ></div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-primary-grade)',
              }}
            ></div>
          </div>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-secondary)',
              }}
            ></div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-secondary-grade)',
              }}
            ></div>
          </div>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-text)',
              }}
            ></div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-neutral)',
              }}
            ></div>
          </div>
          <div style={{ display: 'grid', gap: '0.5rem' }}>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-neutral-bg)',
              }}
            ></div>
            <div
              style={{
                width: '2rem',
                height: '2rem',
                borderRadius: '50%',
                background: 'var(--color-neutral-bright)',
                border: '0.1px solid var(--color-neutral)',
              }}
            ></div>
          </div>
        </div>
      </div>
      <div>
        <h3>Typography</h3>
        <h1>Headline 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <span className="icon-text">icon_text</span>
        <p>Paragraph</p>
      </div>
    </div>
  );
}

export default Styleguide;
