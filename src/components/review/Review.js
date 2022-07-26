

export const Review = ({review, currentUser}) => {
    return <section className="establishment">
            <div>
                <div>User: {currentUser}</div>
                <section> Review: {review}</section>
            </div>
            
        </section>
}