import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function HalamanStatis() {
  return (
    <section className="section">
      <Container>
        <div className="card mt-4">
          <div className="card-body">
            <div className="title-static">
              <div className="meta-static">
                <div className="pt-2 pb-2">
                  <Link className="" to="#">
                    created at 20 Januari 2022
                  </Link>
                  <Link className="" to="#">
                    created by Super Administrator
                  </Link>
                </div>
              </div>
              <h2>Hello World!</h2>
              <div className="pt-2 pb-2">
                <Link className="" to="#">
                  <i className="fa-solid fa-calendar"></i>
                  update at 20 Januari 2022
                </Link>
                <Link className="" to="#">
                  <i className="fa-solid fa-user"></i>
                  update by Super Administrator
                </Link>
              </div>
            </div>
            <div className="content-static">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam sit amet sem id maximus. Aliquam id posuere risus. Nam a sapien lacus. Sed a enim eu metus molestie scelerisque. Ut vehicula elit velit, a interdum ante
                consectetur a. Nulla sodales odio porttitor semper dapibus. Vivamus dictum, nibh nec rutrum lacinia, nunc ipsum iaculis mi, quis feugiat nisl nisl ac neque. Donec semper, nisi sed dapibus consequat, tellus est facilisis
                enim, ut feugiat ipsum libero non nisl. Suspendisse cursus at enim convallis fringilla. Mauris sapien neque, gravida in lacus non, viverra ornare justo. Sed dapibus nibh quam, porttitor vehicula ante dignissim molestie.
                Donec id bibendum ipsum. Cras semper, ipsum vel rutrum dictum, nunc libero feugiat turpis, cursus varius urna sem ac enim.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HalamanStatis;
