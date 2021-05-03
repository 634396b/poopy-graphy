/**
 *       <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              onClick={(_) => router.replace('/?poop=' + pageProps.diarrhea)}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <Typography component="span" variant="h6">
                💩
              </Typography>
            </IconButton>
            <div className={classes.menuButton}></div>
            <IconButton
              onClick={() => toggleDarkMode()}
              color="inherit"
              aria-label="menu"
            >
              <Brightness />
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
 */
