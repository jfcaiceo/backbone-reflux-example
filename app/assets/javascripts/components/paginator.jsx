var Paginator = React.createClass({
  displayName: 'Paginator',
  propTypes: {
    currentPage: React.PropTypes.number.isRequired,
    pageSize: React.PropTypes.number.isRequired,
    currentElements: React.PropTypes.number.isRequired,
    onPageChange: React.PropTypes.func.isRequired
  },
  prevPage: function(event) {
    this.props.onPageChange.call(event, this.props.currentPage - 1);
  },
  nextPage: function(event) {
    this.props.onPageChange.call(event, this.props.currentPage + 1);
  },
  render: function() {
    var prevDisabled = this.props.currentPage == 1;
    var nextDisabled = this.props.pageSize > this.props.currentElements;
    return (
      <nav>
        <ul className="pager">
          <li className={'previous' + (prevDisabled ? ' disabled' : '') }>
            <a href='#' onClick={ (prevDisabled ? null : this.prevPage) } ><span aria-hidden="true">&larr;</span> Anterior</a>
          </li>
          <li className='disabled'><a>{this.props.currentPage}</a></li>
          <li className={'next' + (nextDisabled ? ' disabled' : '') }>
            <a href='#' onClick={ (nextDisabled ? null : this.nextPage) } >Siguiente <span aria-hidden="true">&rarr;</span></a>
          </li>
        </ul>
      </nav>
    );
  }
});