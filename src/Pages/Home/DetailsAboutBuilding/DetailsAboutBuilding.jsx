const DetailsAboutBuilding = () => {
    return (
        <div className="space-y-8 pb-20 max-w-screen-2xl p-2 mx-auto">
            <h1 className="text-5xl font-bold tracking-tight font-Source-Code-Pro">
                Country road take me home...
            </h1>
            <span className="text-red-700 block bg-red-50 max-w-md border border-red-700 p-1">
                This is not real address of stuctoMate. This adress only used
                for example purpose. StructoMate does not have any relation with
                pinned Address.
            </span>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1625.8060265878707!2d90.43338351913543!3d23.825336799165722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70054629b5f%3A0x67d74314951ef084!2sKrishnachura!5e0!3m2!1sen!2sbd!4v1737014436013!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
            ></iframe>
        </div>
    );
};

export default DetailsAboutBuilding;
