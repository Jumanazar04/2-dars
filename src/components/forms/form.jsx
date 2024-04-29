import './form.css'
export function Form(){
    return(
        <section className='container'>
            <div className="form">
                <span>Get touch in</span>
                <h4>Reach out to us and let's turn your construction dreams into reality</h4>
                <form action="#" className='mainForm'>
                    <label htmlFor="name">Name <br /><input type="text" id="name" placeholder='John Doe' /></label>
                    <label htmlFor="email">Email <br /><input type="text" id='a=email' placeholder='johndoe@gmail.com' /></label>
                    <label htmlFor="massage">Massage <br /><textarea name="massage" id="massage" cols="30" rows="10"></textarea></label>
                    <button type='button'>Send</button>
                </form>
            </div>
        </section>
    )
}