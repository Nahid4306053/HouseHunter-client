export default function ContactBanner() {
  return (
    <div
      style={{
        background: `url(https://i.ibb.co/Js9bWhk/15718f89.jpg)`,
        backgroundAttachment : "fixed",
        backgroundSize : "1920px 1080px"
      }}
      className="relative min-h-[600px] py-32 flex pagebanner"
    >
      <div className="pagebanneroverly"></div>
      <div className="mx-auto p-5">
        <div className="relative h-full w-full flex items-center justify-center z-10">
          <div className="grid grid-cols-1 gap-14 lg:grid-cols-3">
            <div className="lg:text-center text-white space-y-6 text-center">
              <h3 className="md:text-2xl text-xl">
                Contact Us for Your Next Dream Home
              </h3>
              <h3 className="md:text-5xl text-3xl font-bold">
                <i className="text-sky-500 mr-2 fas fa-phone"></i> (900) 999 999
              </h3>
              <p className="italic">Our team is ready to assist you 24/7</p>
            </div>
            <div className="lg:text-center text-white space-y-6 text-center">
              {/* Additional content for the second column if needed */}
            </div>
            <div className="lg:text-center text-white space-y-6 text-center">
              <h3 className="md:text-2xl text-xl">
                Exclusive Discounts & Special Offers
              </h3>
              <h3 className="md:text-5xl text-3xl font-bold">
                Rent a House 5 Mounth
              </h3>
              <p className="italic">and enjoy an extra 10 days absolutely FREE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
