<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-item nav-link active" href="#">Home <span class="sr-only">(current)</span></a>
        <a class="nav-item nav-link" href="#">Features</a>
        <a class="nav-item nav-link" href="#">Pricing</a>
        <a class="nav-item nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </div>
    </div>
    </nav>
    <div id="nav" >
		<router-link to="/">Home</router-link> |
		<router-link to="/search">search</router-link> |
		<router-link to="/login">Log in</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:  center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.container {
				width: 500px;
				height: 50px;
				margin: 100px auto;
			}
			
			.parent {
				width: 100%;
				height: 42px;
				top: 4px;
				position: relative;
			}
			
			.parent>input:first-of-type {
				/*輸入框高度設定為40px, border佔據2px，總高度為42px*/
				width: 380px;
				height: 40px; 
				border: 1px solid #ccc;
				font-size: 16px;
				outline: none;
			}
			
			.parent>input:first-of-type:focus {
				border: 1px solid #317ef3;
				padding-left: 10px;
			}
			
			.parent>input:last-of-type {
				/*button按鈕border並不佔據外圍大小，設定高度42px*/
				width: 100px;
				height: 44px; 
				position: absolute;
				background: #317ef3;
				border: 1px solid #317ef3;
				color: #fff;
				font-size: 16px;
				outline: none;
			}


</style>
