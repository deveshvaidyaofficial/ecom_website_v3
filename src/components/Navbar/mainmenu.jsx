function MegaMenu({ type }) {

  const menu = data[type];

  if (!menu) return null;

  return (

    <div className="mega-menu">

      <div className="mega-content">

        {menu.columns.map((column) => (

          <div className="column">

            <h4>{column.heading}</h4>

            {column.links &&
              column.links.map((item) => (

                <p>{item}</p>

              ))}

            {column.image && (

              <img
                src={column.image}
                alt=""
              />

            )}

          </div>

        ))}

      </div>

      {menu.image && (

        <div className="promo">

          <img
            src={menu.image}
          />

        </div>

      )}

    </div>

  );

}

export default MegaMenu;