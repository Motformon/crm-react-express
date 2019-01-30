import React, {Component} from 'react'
import Sidebar from '../../components/Navigation/Sidebar/Sidebar'
import FloatingButton from '../../components/Navigation/FloatingButton/FloatingButton'
class Analytics extends Component {

  render() {
    return (
      <React.Fragment>
				<Sidebar/>
					<main className="content">
							<div className="page-title">
									<h4>Аналитика</h4>
							</div>

							<div className="average-price">
									<p>Средний чек <strong>1500 р.</strong></p>
							</div>

							<div className="analytics-block pb3">
									<h5>Выручка</h5>
									<canvas></canvas>
							</div>

							<div className="analytics-block">
									<h5>Заказы</h5>
									<canvas></canvas>
							</div>
					</main>
				<FloatingButton/>
			</React.Fragment>
    )
  }
}
 


export default Analytics;