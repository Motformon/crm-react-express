import React, {Component} from 'react'
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'
import FloatingButton from '../../components/Navigation/FloatingButton/FloatingButton'
class Categories extends Component {

  render() {
    return (
      <React.Fragment>
				<Sidebar/>
					<main className="content">
							<div className="page-title">
									<h4>Категории</h4>
									<button className="waves-effect waves-light btn grey darken-1">Добавить категорию</button>
							</div>

							<div className="row">
									<div className="col s12">
											<div className="collection">
													<a href="#!" className="collection-item">Категория 1</a>
													<a href="#!" className="collection-item">Категория 1</a>
													<a href="#!" className="collection-item">Категория 1</a>
													<a href="#!" className="collection-item">Категория 1</a>
													<a href="#!" className="collection-item">Категория 1</a>
													<a href="#!" className="collection-item active">Категория 2</a>
													<a href="#!" className="collection-item">Категория 1</a>
													<a href="#!" className="collection-item">Категория 1</a>
											</div>
									</div>
							</div>

					</main>
				<FloatingButton/>
			</React.Fragment>
    )
  }
}



export default Categories;