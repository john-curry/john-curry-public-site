export default function Contact(props) {
    return (
        <main className="login">
            <form action="" method="get" className="user-login">
                <div><label htmlFor="username" >Username</label><input id="username" type="text"     name="username" required minLength="5" maxLength="255" size="15" /></div>
                <div><label htmlFor="password" >Password</label><input id="password" type="password" name="password" required minLength="8" size="15" /></div>
                <div><label htmlFor="remember" >Remember</label><input id="remember" type="checkbox" name="remember" /></div>
                <div><label htmlFor="login"    >Confirm </label><input id="login"    type="submit"   name="login"   value="Login" /></div>
                <div><label htmlFor="parner"   >Signup  </label><input id="parner"   type="button"   name="partner" value="Become a Partner" /></div>
                <div><a href="forgot.html">Forgot password?</a></div>
            </form>
        </main>
    )
}