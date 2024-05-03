export default function User({
  item,
  index,
  deleteUser,
  setChangedUserId,
  changeUser,
  setUserChange,
  userChange  }) {

    return (
        <li>
              <p>{item.name}</p>
              <p>{item.email}</p>
              <p>{item.username}</p>
              <button onClick={() => deleteUser(index)}>X</button>
              <button onClick={(ev) => {
                setChangedUserId(item.id)
                if (ev.target.parentElement.lastChild.style.display === 'block') {
                  ev.target.parentElement.lastChild.style = `display:none;`

                } else if (ev.target.parentElement.lastChild.style.display === 'none') {
                  ev.target.parentElement.lastChild.style = `display:block;`

                }
              }}>CHANGE</button>
              <form style={{ display: 'none' }} onSubmit={() => changeUser(item.id)}>
                <input onChange={(ev) => setUserChange({ ...userChange, name: ev.target.value })} type="text" />
                <input onChange={(ev) => setUserChange({ ...userChange, username: ev.target.value })} type="text" />
                <input onChange={(ev) => setUserChange({ ...userChange, email: ev.target.value })} type="text" />
                <button type='submit'>ADD</button>
              </form>
            </li>
    )
}


