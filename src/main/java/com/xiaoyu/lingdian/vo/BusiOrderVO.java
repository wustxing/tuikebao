package com.xiaoyu.lingdian.vo;

import java.util.ArrayList;
import java.util.List;

import com.xiaoyu.lingdian.entity.BusiOrder;
import com.xiaoyu.lingdian.entity.BusiOrderItem;
import com.xiaoyu.lingdian.vo.BaseVO;
import com.xiaoyu.lingdian.tool.DateUtil;

/**
* 商城订单表
*/
public class BusiOrderVO implements BaseVO {

	/**
	*标识UUID
	*/
	private String bsorrUuid;

	/**
	*所属用户
	*/
	private String bsorrUser;

	/**
	*所属用户名称
	*/
	private String bsorrUserName;
	
	/**
	*商品总价
	*/
	private Double bsorrProductValue;

	/**
	*运费总价
	*/
	private Double bsorrExpressValue;

	/**
	*客服调整运费
	*/
	private Double bsorrAdjustExpress;

	/**
	*客服调整总价
	*/
	private Double bsorrAdjustProduct;

	/**
	*订单总价
	*/
	private Double bsorrOrderValue;

	/**
	*实际支付
	*/
	private Double bsorrActualPay;

	/**
	*合计支付金额(实付款)
	*/
	private Double bsorrTotalValue;

	/**
	*退款总额
	*/
	private Double bsorrRefund;

	/**
	*交易号
	*/
	private String bsorrTradeNo;

	/**
	*商品总数
	*/
	private Integer bsorrTotalQuantity;

	/**
	*商品总重量
	*/
	private Double bsorrTotalWeight;

	/**
	*支付时间
	*/
	private String bsorrPayTime;

	/**
	*支付状态:1支付中2支付成功3支付失败4已取消（未支付成功前）5已完成（所有子订单完成后）6已删除（所有子订单删除后）
	*/
	private Integer bsorrStatus;

	/**
	*创建时间(下单时间)
	*/
	private String bsorrCdate;

	/**
	*更新时间
	*/
	private String bsorrUdate;

	/**
	*收货人姓名
	*/
	private String bsorrName;

	/**
	*收货人身份证号
	*/
	private String bsorrIdCard;

	/**
	*收货人联系方式
	*/
	private String bsorrMobile;

	/**
	*邮政编码
	*/
	private String bsorrZipCode;

	/**
	*所在省
	*/
	private String bsorrProvince;

	/**
	*所在省名称
	*/
	private String bsorrProvinceName;

	/**
	*所在市
	*/
	private String bsorrCity;

	/**
	*所在市名称
	*/
	private String bsorrCityName;

	/**
	*所在区
	*/
	private String bsorrCounty;

	/**
	*所在区名称
	*/
	private String bsorrCountyName;

	/**
	*详细地址
	*/
	private String bsorrAddress;

	/**
	 * 订单明细集合
	 */
	private List<BusiOrderItem> busiOrderItemList = new ArrayList<BusiOrderItem>();
	
	public void setBsorrUuid(String bsorrUuid) {
		this.bsorrUuid = bsorrUuid;
	}

	public String getBsorrUuid( ) {
		return bsorrUuid;
	}

	public void setBsorrUser(String bsorrUser) {
		this.bsorrUser = bsorrUser;
	}

	public String getBsorrUser( ) {
		return bsorrUser;
	}

	public void setBsorrProductValue(Double bsorrProductValue) {
		this.bsorrProductValue = bsorrProductValue;
	}

	public Double getBsorrProductValue( ) {
		return bsorrProductValue;
	}

	public void setBsorrExpressValue(Double bsorrExpressValue) {
		this.bsorrExpressValue = bsorrExpressValue;
	}

	public Double getBsorrExpressValue( ) {
		return bsorrExpressValue;
	}

	public void setBsorrAdjustExpress(Double bsorrAdjustExpress) {
		this.bsorrAdjustExpress = bsorrAdjustExpress;
	}

	public Double getBsorrAdjustExpress( ) {
		return bsorrAdjustExpress;
	}

	public void setBsorrAdjustProduct(Double bsorrAdjustProduct) {
		this.bsorrAdjustProduct = bsorrAdjustProduct;
	}

	public Double getBsorrAdjustProduct( ) {
		return bsorrAdjustProduct;
	}

	public void setBsorrOrderValue(Double bsorrOrderValue) {
		this.bsorrOrderValue = bsorrOrderValue;
	}

	public Double getBsorrOrderValue( ) {
		return bsorrOrderValue;
	}

	public void setBsorrActualPay(Double bsorrActualPay) {
		this.bsorrActualPay = bsorrActualPay;
	}

	public Double getBsorrActualPay( ) {
		return bsorrActualPay;
	}

	public void setBsorrTotalValue(Double bsorrTotalValue) {
		this.bsorrTotalValue = bsorrTotalValue;
	}

	public Double getBsorrTotalValue( ) {
		return bsorrTotalValue;
	}

	public void setBsorrRefund(Double bsorrRefund) {
		this.bsorrRefund = bsorrRefund;
	}

	public Double getBsorrRefund( ) {
		return bsorrRefund;
	}

	public void setBsorrTradeNo(String bsorrTradeNo) {
		this.bsorrTradeNo = bsorrTradeNo;
	}

	public String getBsorrTradeNo( ) {
		return bsorrTradeNo;
	}

	public void setBsorrTotalQuantity(Integer bsorrTotalQuantity) {
		this.bsorrTotalQuantity = bsorrTotalQuantity;
	}

	public Integer getBsorrTotalQuantity( ) {
		return bsorrTotalQuantity;
	}

	public void setBsorrTotalWeight(Double bsorrTotalWeight) {
		this.bsorrTotalWeight = bsorrTotalWeight;
	}

	public Double getBsorrTotalWeight( ) {
		return bsorrTotalWeight;
	}

	public void setBsorrPayTime(String bsorrPayTime) {
		this.bsorrPayTime = bsorrPayTime;
	}

	public String getBsorrPayTime( ) {
		return bsorrPayTime;
	}

	public void setBsorrStatus(Integer bsorrStatus) {
		this.bsorrStatus = bsorrStatus;
	}

	public Integer getBsorrStatus( ) {
		return bsorrStatus;
	}

	public void setBsorrCdate(String bsorrCdate) {
		this.bsorrCdate = bsorrCdate;
	}

	public String getBsorrCdate( ) {
		return bsorrCdate;
	}

	public void setBsorrUdate(String bsorrUdate) {
		this.bsorrUdate = bsorrUdate;
	}

	public String getBsorrUdate( ) {
		return bsorrUdate;
	}

	public void setBsorrName(String bsorrName) {
		this.bsorrName = bsorrName;
	}

	public String getBsorrName( ) {
		return bsorrName;
	}

	public void setBsorrIdCard(String bsorrIdCard) {
		this.bsorrIdCard = bsorrIdCard;
	}

	public String getBsorrIdCard( ) {
		return bsorrIdCard;
	}

	public void setBsorrMobile(String bsorrMobile) {
		this.bsorrMobile = bsorrMobile;
	}

	public String getBsorrMobile( ) {
		return bsorrMobile;
	}

	public void setBsorrZipCode(String bsorrZipCode) {
		this.bsorrZipCode = bsorrZipCode;
	}

	public String getBsorrZipCode( ) {
		return bsorrZipCode;
	}

	public void setBsorrProvince(String bsorrProvince) {
		this.bsorrProvince = bsorrProvince;
	}

	public String getBsorrProvince( ) {
		return bsorrProvince;
	}

	public void setBsorrProvinceName(String bsorrProvinceName) {
		this.bsorrProvinceName = bsorrProvinceName;
	}

	public String getBsorrProvinceName( ) {
		return bsorrProvinceName;
	}

	public void setBsorrCity(String bsorrCity) {
		this.bsorrCity = bsorrCity;
	}

	public String getBsorrCity( ) {
		return bsorrCity;
	}

	public void setBsorrCityName(String bsorrCityName) {
		this.bsorrCityName = bsorrCityName;
	}

	public String getBsorrCityName( ) {
		return bsorrCityName;
	}

	public void setBsorrCounty(String bsorrCounty) {
		this.bsorrCounty = bsorrCounty;
	}

	public String getBsorrCounty( ) {
		return bsorrCounty;
	}

	public void setBsorrCountyName(String bsorrCountyName) {
		this.bsorrCountyName = bsorrCountyName;
	}

	public String getBsorrCountyName( ) {
		return bsorrCountyName;
	}

	public void setBsorrAddress(String bsorrAddress) {
		this.bsorrAddress = bsorrAddress;
	}

	public String getBsorrAddress( ) {
		return bsorrAddress;
	}

	public List<BusiOrderItem> getBusiOrderItemList() {
		return busiOrderItemList;
	}

	public void setBusiOrderItemList(List<BusiOrderItem> busiOrderItemList) {
		this.busiOrderItemList = busiOrderItemList;
	}

	public String getBsorrUserName() {
		return bsorrUserName;
	}

	public void setBsorrUserName(String bsorrUserName) {
		this.bsorrUserName = bsorrUserName;
	}

	public BusiOrderVO( ) { 
	}

	@Override
	public void convertPOToVO(Object poObj) {
		if (null == poObj) {
			return;
		}

		BusiOrder po = (BusiOrder) poObj;
		this.bsorrUuid = po.getBsorrUuid();
		this.bsorrUser = po.getBsorrUser();
		this.bsorrProductValue = po.getBsorrProductValue();
		this.bsorrExpressValue = po.getBsorrExpressValue();
		this.bsorrAdjustExpress = po.getBsorrAdjustExpress();
		this.bsorrAdjustProduct = po.getBsorrAdjustProduct();
		this.bsorrOrderValue = po.getBsorrOrderValue();
		this.bsorrActualPay = po.getBsorrActualPay();
		this.bsorrTotalValue = po.getBsorrTotalValue();
		this.bsorrRefund = po.getBsorrRefund();
		this.bsorrTradeNo = po.getBsorrTradeNo();
		this.bsorrTotalQuantity = po.getBsorrTotalQuantity();
		this.bsorrTotalWeight = po.getBsorrTotalWeight();
		this.bsorrPayTime = po.getBsorrPayTime()!=null?DateUtil.formatDefaultDate(po.getBsorrPayTime()):"";
		this.bsorrStatus = po.getBsorrStatus();
		this.bsorrCdate = po.getBsorrCdate()!=null?DateUtil.formatDefaultDate(po.getBsorrCdate()):"";
		this.bsorrUdate = po.getBsorrUdate()!=null?DateUtil.formatDefaultDate(po.getBsorrUdate()):"";
		this.bsorrName = po.getBsorrName();
		this.bsorrIdCard = po.getBsorrIdCard();
		this.bsorrMobile = po.getBsorrMobile();
		this.bsorrZipCode = po.getBsorrZipCode();
		this.bsorrProvince = po.getBsorrProvince();
		this.bsorrProvinceName = po.getBsorrProvinceName();
		this.bsorrCity = po.getBsorrCity();
		this.bsorrCityName = po.getBsorrCityName();
		this.bsorrCounty = po.getBsorrCounty();
		this.bsorrCountyName = po.getBsorrCountyName();
		this.bsorrAddress = po.getBsorrAddress();
	}

}