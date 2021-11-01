import Carousel from "react-bootstrap/Carousel";
import './Count.css';
export default function Count() {
  const testimonial = [
    {
      image:
        "https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/testimonials-image-3.png",
      content:
        "Over all though it was a great experience and we have had lots of great feedback. We already started promoting our next event and I have been approached by 4 other companies who want to know more about it as they want to use it for their own events.",
      author: "Sarah M., Director of Events",
    },
    {
      image:
        "https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/testimonials-image-1.png",
      content:
        "I cannot tell you how much we loved using this silent auction software. Everything was seamless…from set up, to bidding, to payment. We will absolutely use MyEvent next year.",
      author: "Sarah M., CCHS Foundation",
    },
    {
      image:
        "https://wellspring.qodeinteractive.com/wp-content/uploads/2016/01/testimonials-image-2.png",
      content:
        "I tried MyEvent instead of typical paper raffle tickets. The system was easy to set up online and people who couldn't attend the event were still able to enter the raffle, which was HUGE bump in revenue.",
      author: "Alexander B., Pan-Mass Challenge",
    },
    // {
    //   content:
    //     "MyEvent is a great way to bring in money for your Fund A Need. The 24/7 tech support allows you to feel confident, and the platform makes your Fund a Need so much easier to run. Well definitely be using MyEvent again.",
    //   author: "Amy C., One Less Orphan Fund",
    // },
  ];

  return (
    <div>
      <Carousel interval={1000}>
        {testimonial.map((c, index) => {
          return (
            <Carousel.Item interval={5000}>
              <div className="testimonial">
                <img src={c.image} alt="client1" />
                <p className="my-2">{c.author}</p>
                <p>{c.content}</p>
              </div>

              <Carousel.Caption></Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
