package com.xiaoyu.lingdian.service.impl.my;

import java.util.ArrayList;
import java.util.Map;
import java.util.List;
import java.util.HashMap;
import com.xiaoyu.lingdian.core.mybatis.page.Page;
import com.xiaoyu.lingdian.core.mybatis.page.PageRequest;
import com.xiaoyu.lingdian.service.CoreUserService;
import com.xiaoyu.lingdian.service.my.BusiProfitRecordService;
import com.xiaoyu.lingdian.tool.StringUtil;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.xiaoyu.lingdian.core.mybatis.dao.MyBatisDAO;
import com.xiaoyu.lingdian.entity.BusiProfitRecord;
import com.xiaoyu.lingdian.entity.CoreUser;

/**
* 用户收益明细表
*/
@Service("busiProfitRecordService")
public class BusiProfitRecordServiceImpl implements BusiProfitRecordService {

	@Autowired
	private MyBatisDAO myBatisDAO;

	@Autowired
	private CoreUserService coreUserService;

	@Override
	public boolean insertBusiProfitRecord(BusiProfitRecord busiProfitRecord) {
		myBatisDAO.insert(busiProfitRecord);
		return true;
	}

	@Override
	public boolean updateBusiProfitRecord(BusiProfitRecord busiProfitRecord) {
		myBatisDAO.update(busiProfitRecord);
		return true;
	}

	@Override
	public boolean deleteBusiProfitRecord(BusiProfitRecord busiProfitRecord) {
		myBatisDAO.delete(busiProfitRecord);
		return true;
	}

	@Override
	public boolean deleteBatchByIds(List<String> list ) {
		if (list.size() <= 0) {
			return true;
		}
		Map<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("list", list);
		myBatisDAO.delete("deleteBatchBusiProfitRecordByIds",hashMap);
		return true;
	}

	@Override
	public BusiProfitRecord getBusiProfitRecord(BusiProfitRecord busiProfitRecord) {
		return (BusiProfitRecord) myBatisDAO.findForObject(busiProfitRecord);
	}

	@SuppressWarnings("unchecked")
	@Override
	public Page<BusiProfitRecord> findBusiProfitRecordForPagesByMy(String bsprdUser, int pageNum, int pageSize) {
		Map<String, Object> hashMap = new HashMap<String, Object>();
		hashMap.put("bsprdUser", bsprdUser);
		return myBatisDAO.findForPage("findBusiProfitRecordForPagesByMy", new PageRequest(pageNum, pageSize, hashMap));
	}

	@SuppressWarnings("unchecked")
	@Override
	public Page<BusiProfitRecord> findBusiProfitRecordPage(String userName, int pageNum, int pageSize) {
		Map<String, Object> hashMap = new HashMap<String, Object>();
		if (!StringUtil.isEmpty(userName)) {
			List<CoreUser> userList = coreUserService.findCoreUserList(userName, null);
			List<String> list = new ArrayList<>();
			for (CoreUser coreUser : userList) {
				list.add(coreUser.getCrusrUuid());
			}
			if(list.size() <= 0) {
				return new Page<BusiProfitRecord>(1, 10, 0);
			}
			hashMap.put("list", list);
		}
		return myBatisDAO.findForPage("findBusiProfitRecordForPages", new PageRequest(pageNum, pageSize, hashMap));
	}

}