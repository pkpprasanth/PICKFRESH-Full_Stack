package com.pickfresh.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import javax.persistence.Table;

import org.hibernate.annotations.DynamicUpdate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Data
@Entity
@Table
@AllArgsConstructor
@NoArgsConstructor
@ToString
@DynamicUpdate
public class Kit {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long kitId;
	private String kitName;
	private String kitCost;
	private String kitDuration;
	private String kitCategory;
	private String kitDescription;
	private String kitPic;
	private String kitIngredientsPic;
	private String kitRecipeDesc1;
	private String kitRecipePic1;
	private String kitRecipeDesc2;
	private String kitRecipePic2;
	private String kitRecipeDesc3;
	private String kitRecipePic3;
	private String kitRecipeDesc4;
	private String kitRecipePic4;
}
