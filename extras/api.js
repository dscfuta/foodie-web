function renderUserCard(name, email, address, website) {
  const column = $('<div/>').addClass('col-4 mb-3')

  const card = $('<div/>').addClass('card')
  column.append(card)

  const cardBody = $('<div/>').addClass('card-body')
  card.append(cardBody)

  const nameElement = $('<h5/>')
    .addClass('card-title')
    .text(name)
  cardBody.append(nameElement)

  const emailElement = $('<h6/>')
    .addClass('card-subtitle mb-3 grey-text text-muted')
    .text(email)
  cardBody.append(emailElement)

  const addressText =
    address.suite + ', ' + address.street + ', ' + address.city
  const addressElement = $('<p/>').text(addressText)
  cardBody.append(addressElement)

  const websiteElement = $('<a/>')
    .addClass('btn btn-primary')
    .attr('href', 'http://' + website)
    .text('Visit website')
  cardBody.append(websiteElement)

  return column
}

$.get('https://jsonplaceholder.typicode.com/users', function(data) {
  data.forEach(function(datum) {
    $('#users').append(
      renderUserCard(datum.name, datum.email, datum.address, datum.website)
    )
  })
})
