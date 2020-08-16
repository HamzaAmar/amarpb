export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (() => {    
            window.__onThemeChange = function() {};                
            function setTheme(newTheme) {                  
              window.__theme = newTheme;                  
              preferredTheme = newTheme;                  
              document.body.className = newTheme;                 
              window.__onThemeChange(newTheme);                
            }

            let preferredTheme

            try {
              preferredTheme = localStorage.getItem('color-mode')
            } catch (err) {}

            window.__setPreferredTheme = newTheme => {
              setTheme(newTheme)
              try {
                localStorage.setItem('color-mode', newTheme)
              } catch (err) {}
            }

            let darkQuery = window.matchMedia('(prefers-color-scheme: dark)')

            darkQuery.addListener(e => {
              window.__setPreferredTheme(e.matches ? 'dark' : 'light')
            })

            setTheme(preferredTheme || (darkQuery.matches ? 'dark' : 'light') || 'light')

          })()
        `,
      }}
    />,
  ])
}
