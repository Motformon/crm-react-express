import React, {Component} from 'react'
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'
import FloatingButton from '../../components/Navigation/FloatingButton/FloatingButton'
class Overview extends Component {

  render() { 
    return (
      <React.Fragment>
				<Sidebar/>
				<main className="content">
					<div className="page-title">
							<h4>
									Обзор за вчера (09.04.2018)
									<i className="material-icons black-text pointer" id="dashboard-info">info_outline</i>
							</h4>
					</div>
					<div className="row">
							<div className="col s12 l6">
									<div className="card light-blue lighten-2 white-text">
											<div className="card-content">
													<span className="card-title">Выручка:</span>
													<h3>20 000 руб.</h3>
													<h3 className="green-text text-darken-2 m0 mb1">
															<i className="material-icons">arrow_upward</i>
															26%
													</h3>
													<p>Выручка вашего бизнеса вчера на 20% выше среднего: 5555 руб. в день</p>
											</div>
									</div>
							</div>

							<div className="col s12 l6">
									<div className="card orange lighten-2 white-text">
											<div className="card-content">
													<span className="card-title">Заказы:</span>
													<h3>200 зак.</h3>
													<h3 className="red-text m0 mb1">
															<i className="material-icons">arrow_downward</i>
															26%
													</h3>
													<p>Число заказов вчера на 26% ниже среднего значения: 3 зак. в день</p>
											</div>
									</div>
							</div>
						</div>
				</main>

				<a id="menu" className="waves-effect waves-light btn btn-floating"><i className="material-icons">info</i></a>

				<div className="tap-target" data-target="menu">
						<div className="tap-target-content">
								<h5>Зачем нужна эта страница?</h5>
								<p>Страница “Обзор” покажет динамику продаж за предыдущий день. Сравнение со средним значениями поможет вам понять, как идут дела у Вашего бизнеса.</p>
						</div>
				</div>
				<FloatingButton/>
			</React.Fragment>
    )
  }
}



export default Overview;