import React, { Component} from 'react';
import './App.css';
import './css/font.css';
import './css/margin.css'
import './css/color.css'

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="header">
                    <div className="headerContain font-white font-micro">
                        <img className="imgHead" src={require('./image/icon_bg_small.png')} alt="未正确显示"/>
                        <text className="font-2rem margin_1vh">魏清峰</text>
                        <text className="font-1rem margin_1vh">Android开发工程师</text>
                    </div>
                </div>
                <div className="center">
                    <div className="center_top">
                        <div className="font-2rem" style={{textAlign:'center'}}>个人简介</div>
                        <p className="margin_top_5vw text_66 text_intent">
                            嗨，欢迎来的我的个人主页！正如你所看到的，我就是魏清峰。
                        </p>
                        <p className="text_66 text_intent">1993年生。</p>
                        <p className="text_66 text_intent">2011年就读广东省五邑大学通信工程，主修C语言、单片机、通信原理等。</p>
                        <p className="text_66 text_intent">2015年6月份入职广东米点科技有限公司，任Android开发工程师职位，负责根据业务需求进行Android新平台、架构、技术的研究和实践，
                            与产品、设计、后台、测试等人员紧密合作，促进项目顺利开展，按时保质完成android平台app开发。</p>
                        <p className="text_66 text_intent">2017年2月份入职广东利大科技有限公司，同样负责android平台app开发。</p>
                    </div>
                    <div className="divider"></div>
                    <div className="center_recent">
                        <div className="font-2rem" style={{textAlign:'center'}}>最近作品</div>
                        <div className="item margin_top_5vw">
                            <img className="icon_item" src={require('./image/icon_carcare.png')}/>
                            <div className="item_content margin_left_5vw">
                                <p style={{textIndent:'-2em'}}><span style={{color:'#333'}}>名称：</span><span style={{color:'#666'}}>星星车宝</span></p>
                                <p style={{textIndent:'-2em'}}><span style={{color:'#333'}}>简介：</span>
                                    <span style={{color:'#666'}}>星星车宝专注于为汽车美容和维修店打造轻松营运管理软件，通过手机优化汽车门店的运营和管理，提高内部效率，优化顾客的服务体验，为店铺进行数据分析提供营销策略，并最终带来车店利润的大幅提升。</span></p>
                            </div>
                        </div>
                        <div className="item margin_top_5vw">
                            <div className="item_content margin_left_5vw">
                                <p style={{textIndent:'-2em'}}><span style={{color:'#333'}}>名称：</span><span style={{color:'#666'}}>蟹老板</span></p>
                                <p style={{textIndent:'-2em'}}><span style={{color:'#333'}}>简介：</span>
                                    <span style={{color:'#666'}}>蟹老板是一款提供单车维修服务的实用性生活app，入驻了众多有丰富经验的单车维修师傅，提供维修门店，为市民单车出行提供保障。</span></p>
                            </div>
                            <img className="icon_item" src={require('./image/icon_repaircar.png')}/>
                        </div>
                        <div className="item margin_top_5vw">
                            <img className="icon_item" src={require('./image/icon_cloud.png')}/>
                            <div className="item_content margin_left_5vw">
                                <p style={{textIndent:'-2em'}}><span style={{color:'#333'}}>名称：</span><span style={{color:'#666'}}>云众利</span></p>
                                <p style={{textIndent:'-2em'}}><span style={{color:'#333'}}>简介：</span>
                                    <span style={{color:'#666'}}>加入云众利，消费不再贵。云众利秉承“为客牟利，促进销售，培养行业领袖”的企业发展理念，为推动中国全面建设小康社会、实现“中国梦”发挥直接有效的促进作用。</span></p>
                            </div>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="center_recent">
                        <div className="font-2rem" style={{textAlign:'center'}}>杂谈
                            <ol>
                                <li>App开发流程：销售→产品经理与客户沟通确认需求→UI、前端、后台开会讨论立项→UE→UI→
                                    前端UI、后台接口同时进行→前端、后台密切沟通，接口调试→Bug测试完善→项目交付。</li>
                                <li>App常用第三方登录：QQ、微信、微博。一般集成流程：申请认证各平台开发者账号→新建应用，系统分配AppId，AppScrect等信息
                                    →开发人员在项目中集成SDK，配置对应key值→参考开发文档，调用api。</li>
                                <li>App常用第三方支付：微信、支付宝。一般集成流程：申请认证各平台开发者账号→新建应用，系统分配AppId，AppScrect等信息
                                    →开发人员在项目中集成SDK，配置对应key值→参考开发文档，调用api；需要注意的是微信申请app支付功能审核需三周时间，产品经理
                                    应该整体把控项目开发进度，及早申请，避免出现空档期；支付宝开发者账号申请成功后在支付宝开发者网站上配置公钥和私钥；支付过程中
                                    应该避免app端接触敏感信息，签名加密过程应在后台完成。</li>
                                <li>App常用第三方地图：百度地图、高德地图，集成流程参考以上一般集成流程。</li>
                                <li>App常用第三方推送：百度推送、极光推送、友盟推送，集成流程参考以上一般集成流程。</li>
                            </ol>
                        </div>
                    </div>
                    <div className="divider"></div>
                    <div className="center_bot">
                        <div className="center_bot_child">
                            <ul className="ul">
                                <li className="font-1_5rem">职业技能</li>
                                <li className="margin_1vh text_66">Java</li>
                                <li className="margin_1vh text_66">Android</li>
                                <li className="margin_1vh text_66">HTML/CSS</li>
                                <li className="margin_1vh text_66">React Native</li>
                                <li className="margin_1vh text_66">CET-4</li>
                                <li className="margin_1vh text_66">...</li>
                            </ul>
                        </div>
                        <div className="center_bot_child">
                            <ul className="ul">
                                <li className="font-1_5rem">软件环境</li>
                                <li className="margin_1vh text_66">Android Studio</li>
                                <li className="margin_1vh text_66">Eclipse</li>
                                <li className="margin_1vh text_66">WebStorm</li>
                                <li className="margin_1vh text_66">IDEA</li>
                                <li className="margin_1vh text_66">...</li>
                            </ul>
                        </div>
                        <div className="center_bot_child">
                            <ul className="ul">
                                <li className="font-1_5rem">代表作品</li>
                                <li className="margin_1vh text_66">PP选址</li>
                                <li className="margin_1vh text_66">盟主</li>
                                <li className="margin_1vh text_66">云众利</li>
                                <li className="margin_1vh text_66">单车维修</li>
                                <li className="margin_1vh text_66">星星车宝</li>
                                <li className="margin_1vh text_66">...</li>
                            </ul>
                        </div>
                        <div className="center_bot_child">
                            <ul className="ul">
                                <li className="font-1_5rem">我的足迹</li>
                                <li className="margin_1vh text_66">Github</li>
                                <li className="margin_1vh text_66">Stack Overflow</li>
                                <li className="margin_1vh text_66">CSDN</li>
                                <li className="margin_1vh text_66">简书</li>
                                <li className="margin_1vh text_66">知乎</li>
                                <li className="margin_1vh text_66">...</li>
                            </ul>
                        </div>
                        <div className="center_bot_child">
                            <ul className="ul">
                                <li className="font-1_5rem">未来方向</li>
                                <li className="margin_1vh text_66">全栈工程师</li>
                                <li className="margin_1vh text_66">...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
