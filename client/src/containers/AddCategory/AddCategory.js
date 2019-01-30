import React, {Component} from 'react'
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'
import FloatingButton from '../../components/Navigation/FloatingButton/FloatingButton'
class AddCategory extends Component {

  render() {
    return (
      <React.Fragment>
				<Sidebar/>
				<main className="content">
						<div className="page-title">
								<h4>
										<a href="#">Категории</a>
										<i className="material-icons">keyboard_arrow_right</i>
										Добавить категорию
								</h4>
								<span>
										<button className="btn btn-small red">
											<i className="material-icons">delete</i>
										</button>
									</span>
						</div>

						<div className="row">
								<div className="col s12 l6">
										<div className="input-field">
												<input id="name" type="text" required/>
												<label for="name">Название</label>
										</div>

										<div>
												<button className="waves-effect waves-light btn orange lighten-2 mb2">
														<i className="material-icons left">backup</i>
														Загрузить изображение
												</button>
										</div>

										<div>
												<button className="waves-effect waves-light btn">
														Сохранить изменения
												</button>
										</div>
								</div>

								<div className="col s12 l4 center">
										<img className="responsive-img" style={{'height': '200px'}} src="cake.jpg"/>
								</div>
						</div>

						<div className="row">
								<div className="col s12">
										<div className="page-subtitle">
												<h4>Позиции:</h4>
												<button className="waves-effect waves-light btn grey darken-1 btn-small modal-trigger" data-target="create-modal">
														Добавить позицию
												</button>
										</div>

										<div className="collection">
												<a className="collection-item collection-item-icon">
														<span>
																Кофе <strong>20 руб.</strong>
														</span>
														<span>
																<i className="material-icons">delete</i>
														</span>
												</a>
										</div>
								</div>
						</div>


				</main>

				<div id="create-modal" className="modal">
						<div className="modal-content">
								<h4 className="mb1">Добавить позицию</h4>
								<div className="input-field">
										<input id="pos-name" type="text" required/>
										<label for="pos-name">Название</label>
								</div>
								<div className="input-field">
										<input id="pos-cost" type="text" required/>
										<label for="pos-cost">Цена</label>
								</div>
						</div>
						<div className="modal-footer">
								<a href="#!" className="modal-action waves-effect waves-black btn-flat">Отмена</a>
								<button className="modal-action btn waves-effect">Сохранить</button>
						</div>
				</div>
				<FloatingButton/>
			</React.Fragment>
    )
  }
}



export default AddCategory;